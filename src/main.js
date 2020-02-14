import $ from 'jquery';
import { Doctors } from './doctor.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
  $('form#doctor').submit(function (event) {
    event.preventDefault();
    let input = $('#issue').val();
    let doctors = new Doctors(input);
    doctors.getFetch()
  })
})