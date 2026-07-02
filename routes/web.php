<?php

use Illuminate\Support\Facades\Route;

Route::get('/', fn () => abort(404));

Route::middleware(['auth', 'verified'])->group(function () {
    Route::prefix('admin')->group(function () {
        Route::inertia('/', 'dashboard')->name('dashboard');
    });
});

require __DIR__.'/settings.php';
