import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { join } from "path";

export const microserviceOptions: MicroserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["user"],
    protoPath: [join(__dirname, "./user.proto")],
  },
};
