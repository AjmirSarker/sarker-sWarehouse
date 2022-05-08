import React from 'react';

const Blogs = () => {
    return (<section className='container'>
       <div className='my-5'  > <h3>Difference between javascript and nodejs</h3>
       <table class="table table-borderless table-secondary">
  <thead>
    <tr>
      
      <th scope="col">No</th>
      <th scope="col">Node.JS</th>
      <th scope="col">Javascript</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th >1</th>
      <td>It's a Javascript runtime environment that enables you utilize this programming language on the server as well.</td>
      <td>It's a programming language, after all. We mostly utilize JS to create scripts for websites that make them more dynamic.</td>
      
    </tr>
    <tr>
      <th >2</th>
      <td>Nodejs does not support the addition of HTML tags.</td>
      <td>Javascript has the ability to add HTML and manipulate the DOM.</td>
      
    </tr>
    <tr>
      <th >3</th>
      <td> It's a server-side application. As a result, it aids server-side development using JS.</td>
      <td>It is mostly a client-side application. As a result, it's employed in front-end development.</td>
      
    </tr>
   
  </tbody>
</table>

       </div>
       <div className='my-5'> <h3>Differences between sql and nosql databases.</h3>
       <table class="table table-borderless table-secondary">
  <thead>
    <tr>
      
      <th scope="col">No</th>
      <th scope="col">SQL</th>
      <th scope="col">No SQL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th >1</th>
      <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
      <td>A distributed or non-relational database system.</td>
      
    </tr>
    <tr>
      <th >2</th>
      <td>These databases have a predetermined schema that is fixed, static, or both.</td>
      <td>They have a flexible schema.</td>
      
    </tr>
    <tr>
      <th >3</th>
      <td> These databases are not designed to store hierarchical data.</td>
      <td>These databases are ideal for storing data in hierarchical order.</td>
      
    </tr>
    <tr>
      <th >4</th>
      <td> These databases are suitable for advanced queries.</td>
      <td>For sophisticated searches, these databases aren't ideal.</td>
      
    </tr>
   
  </tbody>
</table>

       </div>
       <div class="card">
  <h3 class="card-header">What is the purpose of jwt and how does it work</h3>
  <div class="card-body">
    <h4 class="card-title">JWTs are used to authenticate users and communicate information in a secure manner. The issuer signs the JWT with a private key, or secret. This makes guessing the signature key harder for unauthenticated sources. A public and private key is used in other algorithms.<br></br>The identity provider (IdP) creates a JWT that certifies the user's identity, and the resource server decodes and verifies the token's authenticity using the secret salt / public key.Users can log in with their username and password or with Google/Facebook. The authentication server validates the credentials and generates a jwt that is signed with either a secret salt or a private key. By passing the JWT in the HTTP Authorization header, the User's Client can access protected resources. The secret salt/public key is then used by the resource server to verify the token's authenticity.</h4>
    
  
  </div>
</div>
<div class="card my-5">
  <h3 class="card-header">When should you use nodejs and when should you use mongodb</h3>
  <div class="card-body">
    <h4 class="card-title">Nodejs is a Javascript development environment. Other languages including Python, Java, PHP, C#, C++, Go, and others provide similar tools. Use nodejs if you wish to develop a standalone Javascript program or server.<br></br>A database is often used if your application requires the ability to store data persistently. There are numerous well-known databases. Different databases have different strengths (areas where they excel) and applications. Choosing the right/best database for what you're doing is a different topic.</h4>
    
  
  </div>
</div>
       </section>
    );
};

export default Blogs;