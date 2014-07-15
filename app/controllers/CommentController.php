<?php

class CommentController extends \BaseController {
    
    /**
     * executes the two filters before execute another operation.
     *
     */
    public function __construct()
    {
        $this->beforeFilter('apiAuth');
        $this->beforeFilter('apiCSRF');
    }

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return Response::json(Comment::get());
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		Comment::create(array(
            'author' => Input::get('author'),
            'text' => Input::get('text')
        ));
        
        return Response::json(['status' => 'Success', 'message' => 'Comment created'], 200);
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Comment::destroy($id);
        return Response::json(['status' => 'Success', 'message' => 'Comment deleted'], 200);
	}


}
