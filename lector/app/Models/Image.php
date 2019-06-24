<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    public $timestamps = false;
    public static function saveInfo($web_id,$array){
        Image::where("web_id",$web_id)->delete();
        $arrayInserts = [];
        foreach ($array as $key => $value) {
            $ext = pathinfo($value, PATHINFO_EXTENSION);
            $arrayInserts[] = [
                "link"=>$value, "format" => $ext,"web_id"=>$web_id
            ];
        }
        Image::insert($arrayInserts);
    }
}
