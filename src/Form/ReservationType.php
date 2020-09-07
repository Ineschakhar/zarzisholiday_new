<?php

namespace App\Form;

use App\Entity\Reservation;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ReservationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('surname')
            ->add('email')
            ->add('phone')
            ->add('checkin')
            ->add('checkout')
            ->add('code')
            ->add('NbrAdulte')
            ->add('NbrEnfant')
            ->add('tarifs')
            ->add('status', ChoiceType::class, [
                'choices' => [
                    'New' => 'New',
                    'Accepted' => 'Accepted',
                    'Rejected' => 'Rejected'
                ],
            ])

            //->add('createdAt')
            //->add('updatedAt')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Reservation::class,
        ]);
    }
}
