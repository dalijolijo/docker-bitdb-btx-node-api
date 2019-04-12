const ip = require('ip')
module.exports = {
  'rpc': {
    'protocol': process.env.rpc_protocol ? process.env.rpc_protocol : 'http',
    'user': process.env.rpc_user ? process.env.rpc_user : 'root',
    'pass': process.env.rpc_pass ? process.env.rpc_pass : 'bitcore',
    'host': process.env.RPC_HOST ? process.env.RPC_HOST : ip.address(),
    'port': process.env.rpc_port ? process.env.rpc_port : '8556',
    'limit': Number.parseInt(process.env.rpc_limit ? process.env.rpc_limit : 15)
  },
  'db': {
    'name': process.env.db_name ? process.env.db_name : 'bitdb',
    'url': process.env.MONGODB_URL ? process.env.MONGODB_URL : 'mongodb://localhost:27017',
    'index': {
      'confirmed': {
        'keys': [
          'tx.h', 'blk.i', 'blk.t', 'blk.h',
          'in.e.a', 'in.e.h', 'in.e.i', 'in.i',
          'out.e.a', 'out.e.i', 'out.e.v', 'out.i',
          'in.b0', 'in.b1', 'in.b2', 'in.b3', 'in.b4', 'in.b5', 'in.b6', 'in.b7', 'in.b8', 'in.b9', 'in.b10', 'in.b11', 'in.b12', 'in.b13', 'in.b14', 'in.b15',
          'out.b0', 'out.b1', 'out.b2', 'out.b3', 'out.b4', 'out.b5', 'out.b6', 'out.b7', 'out.b8', 'out.b9', 'out.b10', 'out.b11', 'out.b12', 'out.b13', 'out.b14', 'out.b15',
          'out.s0', 'out.s1', 'out.s2', 'out.s3', 'out.s4', 'out.s5', 'out.s6', 'out.s7', 'out.s8', 'out.s9', 'out.s10', 'out.s11', 'out.s12', 'out.s13', 'out.s14', 'out.s15'
        ],
        'fulltext': ['out.s0', 'out.s1', 'out.s2', 'out.s3', 'out.s4', 'out.s5', 'out.s6', 'out.s7', 'out.s8', 'out.s9', 'out.s10', 'out.s11', 'out.s12', 'out.s13', 'out.s14', 'out.s15']
      },
      'unconfirmed': {
        'keys': [
          'tx.h',
          'in.e.a', 'in.e.h', 'in.e.i', 'in.i',
          'out.e.a', 'out.e.i', 'out.e.v', 'out.i',
          'in.b0', 'in.b1', 'in.b2', 'in.b3', 'in.b4', 'in.b5', 'in.b6', 'in.b7', 'in.b8', 'in.b9', 'in.b10', 'in.b11', 'in.b12', 'in.b13', 'in.b14', 'in.b15',
          'out.b0', 'out.b1', 'out.b2', 'out.b3', 'out.b4', 'out.b5', 'out.b6', 'out.b7', 'out.b8', 'out.b9', 'out.b10', 'out.b11', 'out.b12', 'out.b13', 'out.b14', 'out.b15',
          'out.s0', 'out.s1', 'out.s2', 'out.s3', 'out.s4', 'out.s5', 'out.s6', 'out.s7', 'out.s8', 'out.s9', 'out.s10', 'out.s11', 'out.s12', 'out.s13', 'out.s14', 'out.s15'
        ],
        'fulltext': ['out.s0', 'out.s1', 'out.s2', 'out.s3', 'out.s4', 'out.s5', 'out.s6', 'out.s7', 'out.s8', 'out.s9', 'out.s10', 'out.s11', 'out.s12', 'out.s13', 'out.s14', 'out.s15']
      }
    }
  },
  'zmq': {
    'incoming': {
      'host': process.env.zmq_incoming_host ? process.env.zmq_incoming_host : ip.address(),
      'port': process.env.zmq_incoming_port ? process.env.zmq_incoming_port : '28556'
    },
    'outgoing': {
      'host': process.env.zmq_outgoing_host ? process.env.zmq_outgoing_host : '0.0.0.0',
      'port': process.env.zmq_outgoing_port ? process.env.zmq_outgoing_port : '28555'
    }
  },
  'core': {
    'version': '0.2.0',
    'from': Number.parseInt(process.env.core_from ? process.env.core_from : 0),
    'verbose': process.env.core_verbose ? process.env.core_verbose : false
  }
}
