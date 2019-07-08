<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
class Image extends Model
{
	public $timestamps = false;
	public static function saveInfo($web_id, $array)
	{
		Image::where("web_id", $web_id)->delete();
		$arrayInserts = [];
		foreach ($array as $key => $value) {
			if (strpos($value, "data:image") == 0) {
				$ext = "base64";
			} else {
				$ext = pathinfo($value, PATHINFO_EXTENSION);
			}
			//$isImage = Image:isImage($value);
			if (Image::isImage($value)) {
				$arrayInserts[] = [
					"link" => $value, "format" => $ext, "web_id" => $web_id,
				];
			}
		}
		Image::insert($arrayInserts);
	}
	private static function isImage($link)
	{
		$client = new Client();
		try {
			$response = $client->request('GET', $link);
			$status = $response->getStatusCode();
			$arrayContent = $response->getHeader('Content-Type');
			$propuesta = implode(" | ", $arrayContent);
			$pos = strpos("iamge", $propuesta);
			if ($pos == 0) {
				return true;
			}
			//return $value;
		} catch (\Throwable $th) {
			return false;
		}
	}
}
