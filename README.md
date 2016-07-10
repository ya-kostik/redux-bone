# redux-bone
Redux fantasy about backbone

**NOT READY!**

## Install
```
npm i redux-bone --save-dev
```

##Initialize
```javascript
import {combineReducers, createStore} from 'redux';
import Redbone, {reducer as redbone} from 'redux-bone';

const reducer = combineReducers({
  //...your reducers
  redbone
});
const store = createStore(reducer);
Redbone.initialize(store);
//Done
```

Now create your first collection
```javascript
const API_URL = 'http://localhost:3000/';

class Users extends Redbone.Collection {
  constructor(options) {
    super(options);
    this.url = API_URL + 'user/';
  }
}

const users = new Users();
users.fetch();
// Dispatch > { type: @@Redbone/collection/Users/redbonePid1/FETCH_REQUESTING }
const usersWithPID = new Users({
  pid: 'custom_pid'
});
users.fetch();
// Dispatch > { type: @@Redbone/collection/Users/custom_pid/FETCH_REQUESTING }
```
You can create models too

```javascript
//Create class
class User extends Redbone.Model {
  this.url = API_URL + 'user/';
  pid = 'current_user';
}

//Create instance
const user = new User();
user.load('1');
// Dispatch > { type: @@Redbone/model/User/current_user/LOAD_REQUESTING }
//...some stuff
//after Dispatch > { type: @@Redbone/model/User/current_user/LOAD_REQUESTED }
data = user.get();
//{
//  login: 'user',
//  token: '577b7bb2d1b3b93a29a0d9d3'
//}
```
For more flexibility, you can add special redbone middleware
```javascript
import {middleware} from 'redux-bone';
//...apply middleware
class User extends Redbone.Model {
  this.url = API_URL + 'user/';
  pid = 'current_user';
  //Middleware controls
  //Before call next(action) in middleware
  beforeDispatch({action, next}) {
    if (action.type === this.TYPES.SYNC) {
      if (action.data.removed) return;
    }
    //Don't forget, call next with action
    next(action);
  }
  //after next(action) was call
  afterDispatch({action}) {
    if (action.type === this.TYPES.SAVE_REQUESTED) {
      alert('Model is saved!');
    }
  }
}
```


The MIT License (MIT)

Copyright (c) 2016 Constantin Tsukanov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
