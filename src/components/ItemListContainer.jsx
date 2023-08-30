import {Card, CardHeader, CardBody, Image, Grid} from "@nextui-org/react";

export default function ItemListContainer() {
  return (
    <>
      <Grid.Container gap={2} justify="flex-start" className='cards_container'>  
        <Card className="w-[200px] space-y-5 p-4" radius="2xl">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Tarot Deck</p>
            <small className="text-default-500">Prisma</small>
            <h4 className="font-bold text-large">Prima Tarot Deck</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="../tarot-deck.jpg"
              width={270}
              />
          </CardBody>
        </Card>
      </Grid.Container>
    </>
  );
}