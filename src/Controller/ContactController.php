<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Messages;
use Symfony\Component\HttpFoundation\Request;
use App\Form\MessagesType;

class ContactController extends AbstractController
{ 
    /**
     * @Route("/contact", name="contact", methods={"GET","POST"})
     */
    public function index(Request $request): Response
    {
        $message = new Messages();
        $form = $this->createForm(MessagesType::class, $message);
        $form->handleRequest($request);
        $submittedToken = $request->request->get('token');
        // echo $setting[0]->getTitle();
        // dump($setting);
        // die();

        if ($form->isSubmitted()) {
            if ($this->isCsrfTokenValid('form-reservation', $submittedToken)) {
                $entityManager = $this->getDoctrine()->getManager();
                $message->setStatus('New');
                $message->setIp($_SERVER['REMOTE_ADDR']);
                $entityManager->persist($message);
                $entityManager->flush();
                $this->addFlash('success', 'Your message has been sent successfuly');

                return $this->redirectToRoute('contact');
            }
        } 
        return $this->render('contact/index.html.twig',  [
            'form' => $form->createView(),
        ]);
    }

}
