<?php

class CommentTableSeeder extends Seeder 
{
    public function run()
    {
        DB::table('comments')->delete();
        
        Comment::create(array(
            'author' => 'Cristian Calderon',
            'text' => 'My first test comment.'
        ));
        
        Comment::create(array(
            'author' => 'Gustavo Calderon',
            'text' => 'A second test comment.'
        ));
        
        Comment::create(array(
            'author' => 'Adrian Calderon',
            'text' => 'Another test comment.'
        ));
    }
}