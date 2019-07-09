@extends('layouts.app')
@section('content')
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
		<div class="container-fluid">
			<div class="row">
				@foreach($arrayWebs as $key => $web)
					<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
						<div class="card" >
							<div class="images-preview">
								@foreach($web->imagesr as $k => $image)
									@php
										$x = rand(0,100).'%';
										$y = rand(0,100).'%';
										$style = "left: $x; top: $y;";
									@endphp
									<img class='images-preview__image' style="{{$style}}" src="{{$image->link}}" alt="{{$web->name}}">
								@endforeach
							</div>
							<div class="bar-preview">
								@foreach($web->colors as $k => $color)
									<div class="bar-preview__color" style="background: {{$color->hexa}};" >
										
									</div>
								@endforeach
							</div>
							<div class="card-body text-center">
								<h5 class="card-title">
									{{$web->name}}
								</h5>
								<p>
									{{$web->description}}
								</p>
								<a href="/page/{{$web->id}}" class="btn btn-primary">
									Ver datos
								</a>
							</div>
						</div>
					</div>
				@endforeach
			</div>
		</div>
	</div>
@endsection