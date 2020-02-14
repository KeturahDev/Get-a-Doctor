import $ from 'jquery';
import { Doctors } from './doctor.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function getDoctors(doctors) {
  // console.log(doctors[0].profile.first_name)
  if (doctors === false) {
    $('.error').html('Looks like theres no doctors in the area that meet that criteria. Try entering a one-word symptom, or name.');
  } else {
    doctors.forEach(doctor => {
      let output = $('#doctor-list');
      output.append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name}</li>`);
    });
  }
}

async function order(input) {
  let doctors = new Doctors(input);
  await doctors.getFetch();
  await getDoctors(doctors.jsonifiedDoctors);
}

$(document).ready(function () {
  $('form#doctor').submit(function (event) {
    event.preventDefault();
    let input = $('#issue').val();
    order(input);
    $('.error').empty();
    $('#doctor-list').empty()
  });
});