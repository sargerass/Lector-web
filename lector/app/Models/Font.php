<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Font extends Model
{
    public $timestamps = false;
    protected $fillable = [ 'name', 'route', "web_id"];
    public static function saveInfo($web_id,$array){
        Font::where("web_id",$web_id)->delete();
        $arrayInserts = [];
        foreach ($array as $key => $value) {
            $arrayInserts[] = [
                "name"=>$value, "web_id" => $web_id
            ];
        }
        Font::insert($arrayInserts);
    }
}
