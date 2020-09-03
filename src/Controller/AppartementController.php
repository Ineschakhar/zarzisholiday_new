<?php

namespace App\Controller;

use App\Entity\Appartement;
use App\Form\AppartementType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ImageRepository;
use App\Repository\AppartementRepository;
use App\Repository\CommentRepository;


/**
 * @Route("/appartement")
 */
class AppartementController extends AbstractController
{
    /**
     * @Route("/", name="appartement_index", methods={"GET"})
     */
    public function index(): Response
    {
        $appartements = $this->getDoctrine()
            ->getRepository(Appartement::class)
            ->findAll();

        return $this->render('appartement/index.html.twig', [
            'appartements' => $appartements,
        ]);
    }

    /**
     * @Route("/new", name="appartement_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $appartement = new Appartement();
        $form = $this->createForm(AppartementType::class, $appartement);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($appartement);
            $entityManager->flush();

            return $this->redirectToRoute('appartement_index');
        }

        return $this->render('appartement/new.html.twig', [
            'appartement' => $appartement,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="appartement_show", methods={"GET"})
     */
    public function show(Appartement$appartement,$id, ImageRepository $imageRepository): Response
    {
        $images = $imageRepository->findBy(['Appartement' => $id]);

        return $this->render('appartement/show.html.twig', [
            'appartement' => $appartement,
            'images' => $images,

        ]);
    }

    /**
     * @Route("/show/{id}", name="appartement_toreserve_show", methods={"GET"})
     */
    public function showAppart(Appartement $appartement, $id, ImageRepository $imageRepository, CommentRepository $commentRepository): Response
    {
        $images = $imageRepository->findBy(['Appartement' => $id]);
        $comments = $commentRepository->findBy(['appartementid' => $id, 'status' => 'True']);
 

        return $this->render('appartement/Appartement_show.html.twig', [
            'appartement' => $appartement,
            'images' => $images,
            'comments' => $comments,

        ]);
    }
    /**
     * @Route("/{id}/edit", name="appartement_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Appartement $appartement): Response
    {
        $form = $this->createForm(AppartementType::class, $appartement);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('appartement_index');
        }

        return $this->render('appartement/edit.html.twig', [
            'appartement' => $appartement,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="appartement_delete", methods={"DELETE"})
     * @param Request $request
     * @param Appartement $appartement
     * @return Response
     */
    public function delete(Request $request, Appartement $appartement): Response
    {
        if ($this->isCsrfTokenValid('delete'.$appartement->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($appartement);
            $entityManager->flush();
        }

        return $this->redirectToRoute('appartement_index');
    }
}
