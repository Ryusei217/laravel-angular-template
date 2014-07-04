<?php

class LoginController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
        Auth::logout();
        return Response::json(['flash' => 'You have been disconnected'], 200);
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$credentials = array(
            'email' => Input::get('email'),
            'password' => Input::get('password')
        );
        
        if (Auth::attempt($credentials))
            return Response::json(['user' => Auth::user()->toArray()], 202);
        else
            return Response::json(['flash' => 'Authentication failed'], 401);
	}


}
