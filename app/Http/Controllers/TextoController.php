<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Textos;
use App\User;

class TextoController extends Controller
{
    public function index(){
        $textos = Textos::with('user')->get();

        return $textos;
    }

    public function store(Request $request){     
        $characters = $request->get('characters');

        $charLine = explode("\n", $characters);
        $index = 0;
        $max = 0;
        $lineMax = '';
        if($charLine){
            foreach ($charLine as $key => $line) {
                if(strlen($line) > $max){
                    $index = $key;
                    $max = strlen($line);
                }
            }

            $lineMax = $charLine[$index];
            $mayusculas = '';

            for($i=0; $i < strlen($lineMax); $i++) {
                if (ctype_upper($lineMax[$i])) {                     
                    $mayusculas .= $lineMax[$i];
                }
            }
        }

        $texto = new Textos([
          'characters' => $mayusculas,
          'user_id' => $request->get('user_id')
        ]);

        $texto->save();
    
        // return redirect('/text/update');
        return response()->json($mayusculas, 201);
    }

}
