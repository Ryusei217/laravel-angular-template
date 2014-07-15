<?php

class UserTableSeeder extends Seeder 
{
    public function run() 
    {
        DB::table('users')->delete();
        
        $user = new User;

        $user->username = 'admin';
        $user->email = 'admin@admin.com';
        $user->password = Hash::make('admin');
        $user->password_confirmation = Hash::make('admin');
        $user->confirmation_code = str_random(40);
        $user->confirmed = '1';
        
        $user->save();
    }
}