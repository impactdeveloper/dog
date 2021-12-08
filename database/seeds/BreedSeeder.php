<?php

use Illuminate\Database\Seeder;

class BreedSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('breeds')->insert([
            'name' => 'Retrievers'
        ]);
        DB::table('breeds')->insert([
            'name' => 'French Bulldogs'
        ]);
        DB::table('breeds')->insert([
            'name' => 'German Shepherd Dogs'
        ]);
        DB::table('breeds')->insert([
            'name' => 'Poodles'
        ]);
        DB::table('breeds')->insert([
            'name' => 'bulldog'
        ]);
        DB::table('breeds')->insert([
            'name' => 'Rottweilers'
        ]);
        DB::table('breeds')->insert([
            'name' => 'Dachshunds'
        ]);
        DB::table('breeds')->insert([
            'name' => 'Siberian Huskies'
        ]);
        DB::table('breeds')->insert([
            'name' => 'Pembroke Welsh Corgis'
        ]);
        DB::table('breeds')->insert([
            'name' => 'Yorkshire Terriers'
        ]);
    }
}
