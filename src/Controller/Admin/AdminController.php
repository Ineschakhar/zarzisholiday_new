<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Reservation;

class AdminController extends AbstractController
{
    /**
     * @Route("/dashboard", name="admin")
     */
       public function index(): Response
    {
        $reservations = $this->getDoctrine()
            ->getRepository(Reservation::class)
            ->findAll(); 
       //dd($reservations);
            return $this->render('admin/index.html.twig', [
            'reservations' => $reservations,     
        ]);
    }


}