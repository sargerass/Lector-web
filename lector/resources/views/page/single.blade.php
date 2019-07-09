@extends('layouts.app')

@section('content')
  <div class="container">
    <a href="/" class="btn btn-dark">
      Regresar
    </a>
    <br>
    <br>
    <h1>
      {{$page->name}}
    </h1>
    <p>
      {{$page->description}}
    </p>
    
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="imagenes-tab" data-toggle="tab" href="#imagenes" role="tab" aria-controls="imagenes" aria-selected="true">Imagenes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="colores-tab" data-toggle="tab" href="#colores" role="tab" aria-controls="colores" aria-selected="false">Colores</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="fuentes-tab" data-toggle="tab" href="#fuentes" role="tab" aria-controls="fuentes" aria-selected="false">Fuentes</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="imagenes" role="tabpanel" aria-labelledby="imagenes-tab">
        <div class="row">
          @foreach($page->images as $key => $image)
          <div class="col-md-3 col-sm-6" >
            <image-presentation :image="{{$image}}" ></image-presentation>
          </div>
          @endforeach
        </div>
      </div>
      <div class="tab-pane fade" id="colores" role="tabpanel" aria-labelledby="colores-tab">
        <div class="row">
          @foreach($page->colors as $key => $color)
          <div class="col-lg-2 col-md-3  col-sm-4 col-6" >          
            <color-presentation :color="{{$color}}" ></color-presentation>            
          </div>
          @endforeach
        </div>
      </div>
      <div class="tab-pane fade" id="fuentes" role="tabpanel" aria-labelledby="fuentes-tab">
        <div class="row">
          @foreach($page->fonts as $key => $font)
          <div class="col-md-3 col-sm-6" >
            <font-presentation :font="{{$font}}" ></font-presentation>
          </div>
          @endforeach
        </div>
      </div>
    </div>
  </div>
@endsection