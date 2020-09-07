<?php

namespace App\Form;

use App\Entity\Appartement;
use App\Entity\Category; 
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class AppartementType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title')
            ->add('price')
            ->add('adress')
            ->add('espace')
              ->add('category', EntityType::class, [
                'class' => Category::class,
                'choice_label' => 'title',
            ]) 
             ->add('image', FileType::class, [
                'label' => ' Appartement Image', 
                'mapped' => false, 
                'required' => false, 
                'constraints' => [
                    new File([
                        'maxSize' => '1024k',
                        'mimeTypes' => [
                            'image/*', // All image types
                        ],
                        'mimeTypesMessage' => 'Please upload a valid Image File',
                    ])
                ],
            ]) 
            ->add('nbrpersonne')
            ->add('description')
            ->add('postalCode')
            ->add('status', ChoiceType::class, [
                'choices' => [
                    'taken' => 'taken',
                    'available' => 'available'
                ],])
            ->add('isPublished') 
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Appartement::class,
        ]);
    }
}
