const sqlite3 = require('sqlite3').verbose() // Importando a dependencia

// Criar o objeto que vai fazer operação no banco de dados
const db = new sqlite3.Database('./src/database/database.db')

module.exports = db
// Utilizar o objeto de banco de dados, para nossas operações
// db.serialize(() => {
  
  
//   // 1. Criar uma tabela 
//   db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name TEXT,
//       address TEXT,
//       address2 TEXT,
//       state TEXT,
//       city TEXT,
//       items TEXT
//     );
//   `)


//   // 2. Inserir dados na tabela
//   const query = `
//     INSERT INTO places (
//       image,
//       name,
//       address,
//       address2,
//       state,
//       city,
//       items
//     ) VALUES (?, ?, ?, ?, ?, ?, ?);
//   `

//   const values = [
//     "https://images.unsplash.com/photo-1544218159-da67a4ee4f42?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "Colecotoria",
//     "Guilherme Gemballa, Jardim América",
//     "Número 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Resíduos Eletrônicos, Lâmpadas"
//   ]

//   function afterInsertData (err) {
//     if (err) {
//       return console.log(err);
//     }

//     console.log("Register Successful");
//     console.log(this);
//   }

//   // db.run(query, values, afterInsertData)

//   // 3. consultar os dados da tabela
//   db.all(`SELECT * FROM places`, function(err, rows) {
//     if (err) {
//       return console.log(err);
//     }

//     console.log("Here is your register: ");
//     console.log(rows);
//   })


//   // 4. deletar um dado da tabela

//   // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
//   //   if (err) {
//   //     return console.log(err);
//   //   }

//   //   console.log('Register deleted Successful');
//   // })

// })