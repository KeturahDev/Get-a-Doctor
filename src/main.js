import $ from 'jquery';
import { Doctors } from './doctor.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function getDoctors(doctors) {
  console.log(doctors[0].profile.first_name)
  let output = $('#doctor-list')
  output.append(`<li>${doctors[0].profile.first_name} ${doctors[0].profile.last_name}</li>`)
}

async function order(input) {
  let doctors = new Doctors(input);
  await doctors.getFetch()
  await getDoctors(doctors.jsonifiedDoctors);
}

$(document).ready(function () {
  $('form#doctor').submit(function (event) {
    event.preventDefault();
    let input = $('#issue').val();
    order(input);
  })
})