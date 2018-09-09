@extends('layouts.app')
@section('content')
  <div class="container">
    <a href="{{action('UserController@create')}} " class="btn btn-primary">Nuevo</a>
    <br><br>
    <table class="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Email</th>
        <th>Tipo documento</th>
        <th>Documento</th>
        <th colspan="2">Acción</th>
      </tr>
    </thead>
    <tbody>
      @foreach($users as $user)
      <tr>
        <td>{{$user['id']}}</td>
        <td>{{$user['name']}}</td>
        <td>{{$user['email']}}</td>
        <td>{{$listDocument[$user['type_document']]}}</td>
        <td>{{$user['document']}}</td>
        <td><a href="{{action('UserController@edit', $user['id'])}}" class="btn btn-warning">Editar</a></td>
        <td>
          <form action="{{action('UserController@destroy', $user['id'])}}" method="post"> 
            {{csrf_field()}}
            <input name="_method" type="hidden" value="DELETE">
            <button class="btn btn-danger" type="submit">Eliminar</button>
          </form>
        </td>
      </tr>
      @endforeach
    </tbody>
  </table>
  </div>
@endsection