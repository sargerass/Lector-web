<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Web extends Model
{
    //
    protected $fillable = [ 'name', 'description', 'url', 'data' ];
    //protected $hidden = ["created_at","updated_at","user_id"];
    protected $visible = ['name', 'description', 'url',"id"];
    public function colors(){
        return $this->hasMany('App\Models\Color');
    }
    public function images(){
        return $this->hasMany('App\Models\Image');
    }
    public function fonts(){
        return $this->hasMany('App\Models\Font');
    }
}
