import $ from 'jquery';
import { Doctors } from './doctor.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function getDoctors(doctors) {
  console.log('in get drs')
  if (doctors.result === 'none') {
    $('.error').html('Looks like theres no doctors in the area that meet that criteria. Try entering a one-word symptom, or name.');
  }
  if (doctors.jsonifiedDoctors === false) {
    console.log('in false')
    // $('.error').html(`Error! ${doctors.status}`);
    if (doctors.status >= 400 && doctors.status < 500) {
      $('.error').html(`Uh oh! Error:${doctors.status}.. Client Side Error`);
    } else if (doctors.status >= 500) {
      $('.error').html(`Uh oh! Error: ${doctors.status}.. Server Side Error`);
    } else if (doctors.result === 'none') {
      $('.error').html('Looks like theres no doctors in the area that meet that criteria. Try entering a one-word symptom, or name.');
    }
  } else {
    console.log('in true')
    let output = $('.output');
    doctors.jsonifiedDoctors.forEach(doctor => {
      output.append(`<h4>${doctor.profile.first_name} ${doctor.profile.last_name}, ${doctor.profile.title}</h4>
      <p class="address">
        ${doctor.practices[0].visit_address.street}<br>
        ${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}
      </p>
      <p class="bio">Bio: ${doctor.profile.bio}</p>
      <p>Accepting new Patients: ${doctor.practices[0].accepts_new_patients}</p>
      <table>
        <tr>
          <th>Number</th>
          <td>${doctor.practices[0].phones[0].number}</td>
          <td>${doctor.practices[0].phones[0].type}</td>
        </tr>
      </table> <hr/>`);
    });
  }
}

async function order(issue, name) {
  if (name === '' && issue === '') {
    $('.error').html('Please fill in at least one of the inputs to recieve a list of doctors.');
  } else {
    let doctors = new Doctors(issue, name);
    await doctors.getFetch();
    // if (doctors.jsonifiedDoctors === false) {
    //   if (doctors.status >= 400 && doctors.status < 500) {
    //     $('.error').html(`Uh oh! ${doctors.status}: Client Side Error`);
    //   } else if (doctors.status >= 500) {
    //     $('.error').html(`Uh oh! ${doctors.status}: Server Side Error`);
    //   }
    // }
    await getDoctors(doctors);

  }
}
$(document).ready(function () {
  $('form#doctor').submit(function (event) {
    event.preventDefault();
    $('.error').empty();
    $('.output').empty();
    let issue = $('#issue').val();
    let name = $('#name').val();
    order(issue, name);
  });
});