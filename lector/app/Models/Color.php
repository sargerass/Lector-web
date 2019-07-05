<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    public $timestamps = false;
    public static function saveInfo($web_id,$array){
        Color::where("web_id",$web_id)->delete();
        $arrayInserts = [];
        foreach ($array as $key => $value) {
            $rgba = Color::getColorRGA($value);
            $hexa = Color::getColorHexa($rgba);
            $arrayInserts[] = [
                "rgba"=>$rgba,"hexa"=>$hexa,"web_id"=>$web_id
            ];
        }
        Color::insert($arrayInserts);
    }
    private static function getColorRGA($color){
        if( strpos($color,"rgba") !== false ){
            $color = str_replace(" ","",$color);
        }
        else{
            $color = str_replace(["rgb","(",")"," "],"",$color);
            $color = "rgba($color,1)";
        }
        return $color;
    }
    private static function getColorHexa($color){
        $color = str_replace(["rgba","(",")"],"",$color);
        $ar = explode(",",$color);
        //$help = array_splice($ar,3,1);
        //$ar = array_merge($help,$ar);
        $arrayChannels = [];
        foreach ($ar as $key => $value) {
            if($key == 3){
                $value = 255*$value;
            }
            $arrayChannels[] = Color::getChannel($value);
        }
        /*
        $a = \base_convert($ar[3],10,16);
        $r = \base_convert($ar[0],10,16);
        $g = \base_convert($ar[1],10,16);
        $b = \base_convert($ar[2],10,16);
        */
        return "#".implode("",$arrayChannels );
    }
    private static function getChannel($number){
        $number = \base_convert($number,10,16);
        if(strlen($number) == 1){
            return "0$number";
        }
        return $number;
    }
}
