<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <link rel="stylesheet" href="/css/app.css">
    </head>
    <body>
        <header class="container-fluid d-flex justify-content-end">

            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a class="btn btn-link" href="{{ url('/home') }}">Home</a>
                    @else
                        <a class="btn btn-dark" href="{{ route('login') }}">Login</a>

                        @if (Route::has('register'))
                            <a class="btn btn-primary"  href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                </div>
            @endif
        </header>
        <div>
            <div class="container">
                <h1>
                    Lector Web
                </h1>
                <p>
                    Web para practicar tu maquetación.                    
                </p>
                <h2>
                    Ultimas webs traquiadas
                </h2>
            </div>       
        </div>
        
    </body>
</html>
