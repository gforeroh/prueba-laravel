<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();

        $faker = \Faker\Factory::create();

        $password = Hash::make('123456789');

        User::create([
            'type_document' => 1,
            'document' => '123456789',
            'name' => 'Administrator',
            'email' => 'admin@test.com',
            'password' => $password,
        ]);

        for ($i = 0; $i < 49; $i++) {
            User::create([
                'type_document' => 1,
                'document' => $faker->randomNumber($nbDigits = 8, $strict = false),
                'name' => $faker->name,
                'email' => $faker->email,
                'password' => $password,
            ]);
        }
    }
}
