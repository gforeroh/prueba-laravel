<!-- create.blade.php -->

@extends('master')
@section('content')
<div class="container">
  <form method="post" action="{{url('user')}}">
    <div class="form-group row">
      {{csrf_field()}}
      <label for="lgFormGroupInput" class="col-sm-2 col-form-label col-form-label-lg">Nombre</label>
      <div class="col-sm-6">
        <input type="text" name="name" class="form-control form-control-sm" id="lgFormGroupInput" placeholder="Nombre" required="required">
      </div>
    </div>
    <div class="form-group row">
      <label for="smFormGroupInput" class="col-sm-2 col-form-label col-form-label-sm">Tipo de documento</label>
      <div class="col-sm-6">                
        <select name="type_document" id="inputtype_document" class="form-control" required="required">
          <option value="">-- Seleccione uno --</option>
          @foreach($listDocument as $key => $item)
            <option value="{{$key}}">{{$item}}</option>
          @endforeach
        </select>        
      </div>
    </div>
    <div class="form-group row">
      <label for="smFormGroupInput" class="col-sm-2 col-form-label col-form-label-sm">Documento</label>
      <div class="col-sm-6">        
        <input type="text" name="document" id="inputdocument" class="form-control form-control-sm" value="" required="required" title="">        
      </div>
    </div>
    <div class="form-group row">
      <label for="smFormGroupInput" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
      <div class="col-sm-6">        
        <input type="email" name="email" id="inputemail" class="form-control form-control-sm" value="" required="required" title="">        
      </div>
    </div>
    <div class="form-group row">
      <label for="smFormGroupInput" class="col-sm-2 col-form-label col-form-label-sm">Password</label>
      <div class="col-sm-6">        
        <input type="password" name="password" id="inputpassword" class="form-control form-control-sm" value="" required="required" title="">        
      </div>
    </div>
    <div class="form-group row">
      <div class="col-md-2"></div>
      <input type="submit" class="btn btn-primary">
    </div>
  </form>
  <a href="{{ route('user.index') }}">Volver al inicio</a>
</div>
@endsection