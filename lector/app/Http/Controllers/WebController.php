<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreWebRequest as StoreWebRequest;
use App\Models\Web as Web;
use App\Models\Color as Color;
use App\Models\Font as Font;
use App\Models\Image as Image;
use Auth;
class WebController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $status = 1;
        $arrayPages = $user->webs;
        
        return compact("status","arrayPages");
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $arrayImages = Image::all();
        foreach ($arrayImages as $key => $value) {
            $link = $value->value;
        }
        return $arrayImages;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreWebRequest $request)
    {
        $user = Auth::user();
        $status = 1;
        $web = Web::create($request->all());
        $web->user_id = $user->id;
        $web->save();
        $data = json_decode($request->data);
        Color::saveInfo($web->id,$data->arrayColors);
        Font::saveInfo($web->id,$data->arrayFonts);
        Image::saveInfo($web->id,$data->arrayImages);
        return compact("status","web");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Web $web)
    {
        $user = Auth::user();
        $arrayImages = $web->images;
        $arrayFonts = $web->fonts;
        $arrayColors = $web->colors;
        $sesion = Auth::user()?true:false;
        return compact("web","sesion","arrayImages","arrayFonts","arrayColors");
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Web $web)
    {
        $user = Auth::user();
        if($user->id == $web->user_id){
            $web->status = "inactive";
            $web->save();
        }
        else{
            return ["status"=>0];
        }
        
        return ["status"=>1];
    }
    
}
