import { AddIcon, ArrowForwardIcon, ChevronLeftIcon, MinusIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, IconButton, Image, Input, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useTickets } from 'src/hooks';

const Payment: React.FC = () => {
  const navigate = useNavigate();
  const { general, vips, addGeneral, removeGeneral, addVip, removeVip, onSubmit } = useTickets();

  return (
    <Flex flexDir="column" minH="100vh" minW="100vw" bg="#ececed">
      <Flex align="center" justify="space-between" paddingInline={4} width="100%" height={100}>
        <IconButton
          onClick={() => navigate(-1)}
          isRound
          aria-label="More Info"
          icon={<ChevronLeftIcon fontSize="2xl" />}
          bg="white"
          color="black"
          size="lg"
        />
        <Heading></Heading>
      </Flex>

      <Flex flexDir="column" gap={4} paddingInline={4} paddingBottom={8} width="100%" mt="auto">
        <Flex flexDir="column" gap={4} padding={4} borderRadius="2xl" bg="white">
          <Input variant="filled" size="md" placeholder="Correo electrónico" />
        </Flex>

        <Flex flexDir="column" gap={4} padding={4} borderRadius="2xl" bg="white">
          <Text fontSize="sm" fontWeight={700}>
            Generales
          </Text>
          <Flex flexDir="row" align="center" justify="space-between" borderWidth={1} borderRadius="2xl" padding={2}>
            <IconButton
              aria-label="Add Ticket"
              icon={<MinusIcon />}
              isRound={true}
              isDisabled={general.quantity <= 0}
              onClick={removeGeneral}
            />
            <Text>{general.quantity}</Text>
            <IconButton aria-label="Remove Ticket" icon={<AddIcon />} isRound={true} onClick={addGeneral} />
          </Flex>
        </Flex>

        <Flex flexDir="column" gap={4} padding={4} borderRadius="2xl" bg="white">
          <Text fontSize="sm" fontWeight={700}>
            VIP
          </Text>
          <Flex flexDir="row" align="center" justify="space-between" borderWidth={1} borderRadius="2xl" padding={2}>
            <IconButton
              aria-label="Add Ticket"
              icon={<MinusIcon />}
              isRound={true}
              isDisabled={vips.quantity <= 0}
              onClick={removeVip}
            />
            <Text>{vips.quantity}</Text>
            <IconButton aria-label="Remove Ticket" icon={<AddIcon />} isRound={true} onClick={addVip} />
          </Flex>
        </Flex>

        <Flex flexDir="column" gap={1} padding={4} borderRadius="2xl" bg="white">
          <Text fontSize="sm" fontWeight={700}>
            Resumen de compra
          </Text>
          <Flex align="center" justify="space-between" gap={4}>
            <Text fontSize="sm" color="gray">
              Entradas generales {general.quantity > 0 && `(${general.quantity})`}
            </Text>
            <Text fontSize="sm" color="gray">
              $ {general.quantity * 2000}
            </Text>
          </Flex>
          <Flex align="center" justify="space-between" gap={4}>
            <Text fontSize="sm" color="gray">
              Entradas vips {vips.quantity > 0 && `(${vips.quantity})`}
            </Text>
            <Text fontSize="sm" color="gray">
              $ {vips.quantity * 3000}
            </Text>
          </Flex>
          <Flex align="center" justify="space-between" gap={4}>
            <Text fontSize="sm" fontWeight={700} color="gray">
              Total
            </Text>
            <Text fontSize="sm" fontWeight={700} color="gray">
              $ {general.quantity * 2000 + vips.quantity * 3000}
            </Text>
          </Flex>
        </Flex>

        <Flex flexDir="column" gap={2} padding={4} borderRadius="2xl" bg="white">
          <Flex align="center" justify="space-between" gap={4}>
            <Image src="/mercadopago.png" boxSize={8} objectFit="contain" />
            <Image src="/visa.png" boxSize={8} objectFit="contain" />
            <Image src="/mastercard.png" boxSize="8" objectFit="contain" />
            <Image src="/american-express.png" boxSize="8" objectFit="contain" />
            <Image src="/naranja.webp" boxSize="8" objectFit="contain" />
          </Flex>
        </Flex>

        <Button
          onClick={onSubmit}
          size="lg"
          borderRadius="3xl"
          rightIcon={<ArrowForwardIcon />}
          bg="#86A789"
          color="white"
        >
          Ir a pagar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Payment;
