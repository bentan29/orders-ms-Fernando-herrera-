
// import { Catch, ArgumentsHost, ExceptionFilter } from '@nestjs/common';
// import { RpcException } from '@nestjs/microservices';


// // --- Esta funcion retorna si hay un error entre microservicios ---

// @Catch(RpcException) //- Este filtro captura errores que vienen de comunicación entre microservicios (RpcException) // Solo atrapa este tipo de excepción
// export class RpcCustomExceptionFilter implements ExceptionFilter {

//     catch(exception: RpcException, host: ArgumentsHost) {

//         const ctx = host.switchToHttp();
//         const response = ctx.getResponse(); // Obtiene el response HTTP

//         const rpcError = exception.getError();  // Extrae el error del microservicio

//         // Caso 1: El error viene con estructura { status, message }
//         if( typeof rpcError === 'object' && 'status' in rpcError && 'message' in rpcError) {
//             const status = isNaN(+rpcError.status!) ? 400 : +rpcError.status!;
//             return response.status(status).json(rpcError) // Respeta el status original
//         }

//         // Caso 2: El error es un string u otro formato
//         response.status(400).json({
//             status: 400,
//             message: rpcError
//         })

//     }

// }
