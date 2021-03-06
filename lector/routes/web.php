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


Route::get('/', "WebController@welcome");
Route::resource('/page', "PageController");

Auth::routes();

Route::group(['middleware' => 'auth'], function() {
    Route::resource('web', 'WebController');
});


Route::get('/home', 'HomeController@index')->name('home');
//Route::middleware('auth:api')->resource("/web","WebController");
