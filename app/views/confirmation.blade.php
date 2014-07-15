@extends('layout')

@section('content')   
    @if ( $error )
        <div class="alert alert-error">{{{ $error }}}</div>
    @endif

    @if ( $notice )
        <div class="alert">{{{ $notice }}}</div>

    @endif
    <br />
    <a href="/login"> Sign In</a>
@stop