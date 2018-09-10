<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Hash;
use App\User;
// use Illuminate\Support\Facades\Auth;
use Auth;


class UserController extends Controller
{
    private $listDocument = [1 => 'Cédula Ciudadania', 2 => 'Cédula Extranjeria', 3 => 'Pasaporte'];

    public function userAuth(){
        return Auth::user();
    }

    public function index(){
        // $userAuth = Auth::guard('api')->user();
        // dd($userAuth); die;

        $users = User::all()->toArray();
        $listDocument = $this->listDocument;
        
        $response = [
            'users' => $users,
            'listDocument' => $listDocument
        ];
        
        // return view('user.index', compact('users', 'listDocument'));
        return $response;
    }

    public function show($id){
        $user = User::find($id);
        $listDocument = $this->listDocument;

        $response = [
            'user' => $user,
            'listDocument' => $listDocument
        ];

        return $response;
    }

    public function create(){
        $listDocument = $this->listDocument;

        // return view('user.create', compact('listDocument'));
        return $listDocument;
    }

    public function store(Request $request){
        $user = new User([
          'name' => $request->get('name'),
          'email' => $request->get('email'),
          'type_document' => $request->get('type_document'),
          'document' => $request->get('document'),
          'password' => $password = Hash::make($request->get('password'))
        ]);

        $user->save();
    
        return redirect('/user');
        // return response()->json($user, 201);
    }

    public function edit($id){
        $user = User::find($id);
        $listDocument = $this->listDocument;

        return view('user.edit', compact('user','id','listDocument'));
    }

    public function update(Request $request, $id){
        $user = User::find($id);

        $user->name = $request->get('name');
        $user->email = $request->get('email');
        $user->type_document = $request->get('type_document');
        $user->document = $request->get('document');
        if($request->get('password') != ''){
            $user->password = $password = Hash::make($request->get('password'));
        }
 
        // dd($user); die;
        $user->save();
        return redirect('/user');
    }

    public function destroy($id){
        $user = User::find($id);
        $user->delete();

        return redirect('/user');
    }

    public function delete($id){
        $user = User::find($id);
        $user->delete();
        
        return response()->json(null, 204);
    }

    // public function login(){
    //     return view('user.login');
    // }
}
