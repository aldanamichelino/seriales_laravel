<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use app\User;

class UserController extends Controller
{
  public $titulo = "Mi perfil";

  public function __construct()
  {
      $this->middleware('auth');
  }

    public function show() {
      // $usuarioLogueado = Auth::User();

        return view('perfil');
        // ->with('usuarioLogueado', $usuarioLogueado)
}
}
