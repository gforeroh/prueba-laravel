<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth:api'], function() {    
    Route::get('user', 'UserController@index');
    Route::get('user/{id}', 'UserController@show');
    Route::get('user/create', 'UserController@create');
    Route::get('auth', 'UserController@userAuth');


    Route::get('text', 'TextoController@index');
    


    
});

Route::post('user', 'UserController@store');
Route::post('user/{id}', 'UserController@update');
Route::delete('user/{id}', 'UserController@delete');

Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout');

/* Model Texto */

Route::post('text', 'TextoController@store');



// Route::get('articles', 'ArticleController@index');
// Route::get('articles/{article}', 'ArticleController@show');
// Route::post('articles', 'ArticleController@store');
// Route::put('articles/{article}', 'ArticleController@update');
// Route::delete('articles/{article}', 'ArticleController@delete');

// Route::post('register', 'Auth\RegisterController@register');
// Route::post('login', 'Auth\LoginController@login');
// Route::post('logout', 'Auth\LoginController@logout');