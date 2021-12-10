## Assessment Completion Status
[O] Design Activity List and Detail pages.<br />
[O] Fetch GET API and display ActivityFeed contents.<br />
[O] Create Routes and pass the value through URL && Receive the data from a different component.<br />
[O] Fetch GET API and display ActivityDetail content.<br />
[O] Create POST API to update a individual call object, and connect it with a button named 'Archive' or 'Unarchive'.<br />
[X] Create a button to reset all the calls to be the status 'Unarchived' && Add a button to the main page that archives all the calls at a time.<br />
[X] Create a back button in the detail page to redirect to the main page.<br />
[X] Add functionality to the tabs 'Inbox' and 'Archived' to filter the desired data to be displayed.<br />

## What I have learned
As the version of 'react-router-dom' is updated to 6, the tag 'Switch' and the attribute 'exact' in the 'Route' does not longer exist and be used.<br />
```
<Router>
  <Routes>
    <Route path='/' element={<ActivityFeed/>} />
  </Routes>
</Router>
```
We should add the setting below to prevent the routing from allowing routing only to the root.<br />
```
devServer: {
  historyApiFallback: true
}
```

## Future plan
Mostly, I have struggled with dealing with 'state' that makes the web application dynamically. I have newly tried applying Redux to the project for the first time, but it was time consuming procedure to absorb and use the knowledge of it at the same time. My next step will be knowing how to handle states using Redux for my better React practice, and believe this will help myself to use the React Framework in a proper manner.
