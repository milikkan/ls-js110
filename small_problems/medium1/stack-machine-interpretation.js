/* 


*/

function minilang(operation) {
  let stack = [];
  let register = 0;

  let commands = operation.split(' ');
  commands.forEach(command => {
    switch (command) {
      case 'PRINT':
        console.log(register);
        break;
      case 'PUSH':
        stack.push(register);
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'MULT':
        register = stack.pop() * register;
        break;
      case 'ADD':
        register = register + stack.pop();
        break;
      case 'SUB':
        register = register - stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'REMAINDER':
        register = register % stack.pop();
        break;
      default:
        register = Number(command);
    }
  });
}

minilang('PRINT');
// 0
console.log('----');
minilang('5 PUSH 3 MULT PRINT');
// 15
console.log('----');
minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8
console.log('----');
minilang('5 PUSH POP PRINT');
// 5
console.log('----');
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7
console.log('----');
minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6
console.log('----');
minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12
console.log('----');
minilang('-3 PUSH 5 SUB PRINT');
// 8
console.log('----');
minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)