import $ from 'jquery';
import logo from '../../assets/holberton-logo.jpg';
import './header.css';

$(document).ready(function() {
  $('body').prepend(`<header><img src="${logo}" alt="Holberton Logo"><h1>Holberton Dashboard</h1></header>`);
  console.log('Init header');
});
