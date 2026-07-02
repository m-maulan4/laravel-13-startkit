<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'auth/login')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::prefix('admin')->group(function () {
        require __DIR__.'/settings.php';
        Route::inertia('/', 'dashboard')->name('dashboard');
    });
});
