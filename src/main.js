import $ from 'jquery';
import { Doctors } from './doctor.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function getDoctors(doctors) {
  if (doctors === false) {
    $('.error').html('Looks like theres no doctors in the area that meet that criteria. Try entering a one-word symptom, or name.');
  } else {
    doctors.forEach(doctor => {
      let output = $('#doctor-list');
      output.append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name}</li>`);
    });
  }
}
async function order(issue, name) {
  if (name === '' && issue === '') {
    $('.error').html('Please fill in at least one of the inputs to recieve a list of doctors.');
  } else {
    let doctors = new Doctors(issue, name);
    await doctors.getFetch();
    await getDoctors(doctors.jsonifiedDoctors);
  }
}
$(document).ready(function () {
  $('form#doctor').submit(function (event) {
    event.preventDefault();
    $('.error').empty();
    $('#doctor-list').empty()
    let issue = $('#issue').val();
    let name = $('#name').val();
    order(issue, name);
  });
});