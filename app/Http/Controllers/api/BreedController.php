<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Breed;
use App\BreedImage;
use Illuminate\Support\Facades\Storage;

class BreedController extends Controller
{
    /**
     * Display a listing of the Dog Breed.
     *
     */
    public function index()
    {

        $breed = Breed::all();
        return response()->json($breed, 200);
    }

    /**
     * Display a Images of Dog breed.
     *
     */

    public function breedImages($breedName){
        $breed = Breed::where('name', $breedName)->first();
        if($breed){
            $breedImages = BreedImage::where('breed_id',$breed->id)->pluck('image');
            return response()->json($breedImages, 200);
        }
        return response()->json("No Data Found", 404);

    }
}
