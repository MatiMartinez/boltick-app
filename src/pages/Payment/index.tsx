import { AddIcon, ArrowForwardIcon, MinusIcon } from '@chakra-ui/icons';
import { Button, Divider, Flex, Heading, IconButton, Input, Text } from '@chakra-ui/react';
import { usePayment } from 'src/hooks';
import { formatARS } from 'src/utils/currency';

const Payment: React.FC = () => {
  const { register, tickets, addTicket, removeTicket, onSubmit, handleSubmit } = usePayment();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        flexDir="column"
        gap={{ base: 4, md: 8 }}
        paddingBlock={[4, 8]}
        // paddingInline={[4, 8, 8, 32, 64, 80]}
        paddingInline={{ base: 4, sm: 6, md: 12, lg: '20%', xl: '30%', '2xl': '30%' }}
        minH="100vh"
        minW="100vw"
      >
        {/* <Flex align="center" width="100%" paddingTop={6}>
        <IconButton
          onClick={() => navigate(-1)}
          isRound
          aria-label="More Info"
          icon={<ChevronLeftIcon fontSize="2xl" />}
          bg="white"
          color="black"
          size="lg"
        />
      </Flex> */}
        <Heading fontSize={{ base: 24, md: 32 }}>RESUMEN DE COMPRA</Heading>

        <Flex flexDir="column" gap={{ base: 2, md: 4 }}>
          <Text fontWeight={600}>Datos de contacto</Text>
          <Flex flexDir="column" gap={4}>
            <Input
              {...register('email', { required: '*' })}
              variant="filled"
              size="md"
              placeholder="Correo electrónico"
            />
            <Input
              {...register('phone', { required: '*' })}
              variant="filled"
              size="md"
              placeholder="Número de teléfono"
            />
          </Flex>
        </Flex>

        <Flex flexDir="column" gap={{ base: 2, md: 4 }}>
          <Text fontWeight={600}>Tickets</Text>
          {tickets.map(({ cost, id, name, quantity }) => (
            <Flex
              flexDir="row"
              justify="space-between"
              align="center"
              gap={4}
              paddingInline={6}
              paddingBlock={4}
              border="1px solid #DCDCDC"
              borderRadius="lg"
            >
              <Flex flexDir="column">
                <Text fontSize={14}>{name}</Text>
                <Text fontSize={16} fontWeight={600} color="green.600">
                  {formatARS(cost)}
                </Text>
              </Flex>
              <Flex flexDir="row" align="center" gap={4}>
                <IconButton isRound aria-label="Remove ticket" icon={<MinusIcon />} onClick={() => removeTicket(id)} />
                <Text fontWeight={600}>{quantity}</Text>
                <IconButton isRound aria-label="Add ticket" icon={<AddIcon />} onClick={() => addTicket(id)} />
              </Flex>
            </Flex>
          ))}
        </Flex>

        <Divider />

        <Flex flexDir="column" gap={{ base: 2, md: 4 }}>
          <Text fontWeight={600}>Resumen de pago</Text>
          <Flex flexDir="column" gap={{ base: 1, md: 2 }}>
            {tickets.map(({ cost, name, quantity }) => (
              <Flex justify="space-between" align="center">
                <Text>
                  {name} {quantity > 0 && `(${quantity} ud.)`}
                </Text>
                <Text>{formatARS(cost * quantity)}</Text>
              </Flex>
            ))}

            <Flex justify="space-between" align="center">
              <Text fontWeight={600}>Total</Text>
              <Text fontWeight={600}>
                {formatARS(tickets.reduce((acc, prev) => acc + prev.cost * prev.quantity, 0))}
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Divider />

        <Button
          type="submit"
          size="lg"
          borderRadius="3xl"
          rightIcon={<ArrowForwardIcon />}
          bg="green.600"
          color="white"
        >
          Ir a pagar
        </Button>
      </Flex>
    </form>
  );
};

export default Payment;
