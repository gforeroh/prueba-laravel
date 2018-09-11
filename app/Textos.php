<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;
use App\User;

class Textos extends Model
{
    use Notifiable;

    protected $fillable = [
        'characters', 'user_id',
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function user()
    {
        return $this->belongsTo('App\User', 'id');
    }

}
