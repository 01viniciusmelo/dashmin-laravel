// Lodash
window._ = require('lodash');
// popper.js
window.Popper = require('popper.js').default;
// Jquery
window.$ = window.jQuery = require('jquery');
// Bootstrap
require('bootstrap');
// Axios
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
// list.js
window.List = require('list.js');
// sweetalert
window.swal = require('sweetalert');
// select2
require('select2');
// toastr
window.toastr = require('toastr');
require('./scripts');
