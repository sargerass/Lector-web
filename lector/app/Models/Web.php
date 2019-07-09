<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Web extends Model
{
    protected $fillable = [ 'name', 'description', 'url', 'data' ];
    protected $visible = ['name', 'description', 'url',"id"];
    public function colors(){
        return $this->hasMany('App\Models\Color');
    }
    public function colorsr(){
        return $this->hasMany('App\Models\Color')->inRandomOrder();
    }
    public function images(){
        return $this->hasMany('App\Models\Image');
    }
    public function imagesr(){
        return $this->hasMany('App\Models\Image')->inRandomOrder();
    }
    public function fonts(){
        return $this->hasMany('App\Models\Font');
    }
    public static function lasts(){
        return Web::where("status", 'active')->select('id', 'name', 'url', 'description')
                ->orderBy('created_at', 'DESC')
                ->limit(12)->get();
    }
}

