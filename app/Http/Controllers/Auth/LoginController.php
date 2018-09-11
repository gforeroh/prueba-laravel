<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use App\User;
// use Illuminate\Support\Facades\Auth;
use Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/user';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    protected function authenticated(Request $request, $user)
    {
        if ( $user->isAdmin() ) {
            return redirect()->route('dashboard');
        }

        return redirect('/user');
    }

    public function login(Request $request)
    {
        
        $this->validateLogin($request);

        if ($this->attemptLogin($request)) {
            $user = $this->guard()->user();
            $user->generateToken();

            return redirect('/user');
            // return response()->json([
            //     'data' => $user->toArray(),
            // ]);
        }

        // dd($this->sendFailedLoginResponse($request));
        return $this->sendFailedLoginResponse($request);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $user = Auth::guard('api')->user();
        
        if ($user) {
            $user->api_token = null;
            $user->save();
        }

        return redirect('/login');
        // return response()->json(['data' => 'User logged out.'], 200);
    }
}
