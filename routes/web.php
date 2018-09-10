<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('login');
// });

Route::group(['middleware' => 'auth:web'], function() {
    
    Route::get('/', function () {
        return view('react');
    });

    Route::get('/user', function () {
        return view('react');
    });    

    Route::get('/user/create', function () {
        return view('react');
    });

    Route::get('/user/edit/{id}', function ($id) {
        return view('react');
    });    

    Route::get('/user/grilla', function () {
        return view('react');
    });
});




// Route::resource('user', 'UserController');
Auth::routes();

// Route::get('/user', 'HomeController@index')->name('home');

