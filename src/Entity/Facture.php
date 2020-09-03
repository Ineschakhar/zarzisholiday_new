<?php


namespace App\Entity;

use Doctrine\ORM\Mapping as ORM; 
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * Facture
 *
 * @ORM\Table(name="facture")
 * @ORM\Entity
 */
class Facture
{


    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer") 
     * @Groups({"user:read"})
     */
    private $id;
  use Timestapable;
    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $DateFacture;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $note;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $PaymentType;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $DetailsReservation;


    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }   
    public function getDateFacture(): ?\DateTimeInterface
    {
        return $this->DateFacture;
    }

    public function setDateFacture(?\DateTimeInterface $DateFacture): self
    {
        $this->DateFacture = $DateFacture;

        return $this;
    }

    public function getNote(): ?string
    {
        return $this->note;
    }

    public function setNote(?string $note): self
    {
        $this->note = $note;

        return $this;
    }

    public function getPaymentType(): ?string
    {
        return $this->PaymentType;
    }

    public function setPaymentType(?string $PaymentType): self
    {
        $this->PaymentType = $PaymentType;

        return $this;
    }

    public function getDetailsReservation(): ?string
    {
        return $this->DetailsReservation;
    }

    public function setDetailsReservation(?string $DetailsReservation): self
    {
        $this->DetailsReservation = $DetailsReservation;

        return $this;
    }
}
