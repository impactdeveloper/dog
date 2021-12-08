<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BreedImage extends Model
{
    protected $fillable = ['breed_id', 'image'];

    public function breed(){
        return $this->belongsTo(Breed::class);
        // return $this->belongsTo(Post::class, 'foreign_key', 'owner_key');
    }
}
